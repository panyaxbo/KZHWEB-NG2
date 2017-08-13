import { AppConfigService } from './../../services/app-config/app-config.service';
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { EssenceNg2PrintComponent } from 'essence-ng2-print';
import { UserService } from '../../services/user/user.service';
import { CompanyService } from '../../services/company/company.service';
import { User } from '../../classes/user';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Email: string;
  Password: string;
  User: User;
  Company: any;
  @ViewChild('print1') printComponent1: EssenceNg2PrintComponent;
@ViewChild('print2') printComponent2: EssenceNg2PrintComponent;

printDiv: any;
kzhPrint: any;
showHead: boolean = true;
hideTable1: boolean = false;
datas: any[];
printCSS: string[];
printStyle: string;
editorText = `
<p style="text-align:center;line-height:150%"><strong>
<span style="font-family: 宋体;line-height: 150%;font-size: 21px">
<span style="font-family:宋体">关于</span>××××工程项目划分的请示（函）</span></strong>
<span style="font-family: 宋体; font-size: 21px; text-indent: 315px;">&nbsp;</span></p>
<p style="line-height:150%"><strong>
<span style="font-family: 宋体;line-height: 150%;font-size: 16px">海淀区水利工程质量监督站：</span></strong></p>
<p style="text-indent:38px;line-height:150%"><span style=";font-family:宋体;line-height:150%;font-size:16px">
××××工程，依据××××文件开始建设。（简述工程概况和主要工程量）。</span></p><p style="text-indent:38px;line-height:150%">
<span style=";font-family:宋体;line-height:150%;font-size:16px">
<span style="font-family:宋体">根据《水利水电工程施工质量检验与评定规程》</span>
SL176-2007）、《水利水电基本建设工程单元工程质量评定标准》（SDJ249-88）及《北京市水利工程施工质量评定标准》等有关规定，结合本工程的实际情况，经研究确认本工程项目共划分为××个单位工程，××个分部工程，××个单元工程。其中主要单位工程××个，分别为 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;；主要分部工程××个，分别为 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;；重要隐蔽单元工程××个，分别为 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;；关键部位单元工程××个，分别为 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;。具体划分见附表。</span></p><p style="text-indent:38px;line-height:150%"><span style=";font-family:宋体;line-height:150%;font-size:16px">&nbsp;</span></p><p style="text-indent:38px;line-height:150%"><span style=";font-family:宋体;line-height:150%;font-size:16px"><span style="font-family:宋体">附表：</span>××××工程项目划分表</span></p><p style="text-indent:38px;line-height:150%"><span style=";font-family:宋体;line-height:150%;font-size:16px">&nbsp;</span></p><p style="text-indent:38px;line-height:150%"><span style=";font-family:宋体;line-height:150%;font-size:16px">&nbsp;</span></p>
<p style="text-indent: 406px; line-height: 150%; text-align: right;">
<span style=";font-family:宋体;line-height:150%;font-size:16px">××××××（单位）</span></p>
<p style="text-indent: 398px; line-height: 150%; text-align: right;">
<span style=";font-family:宋体;line-height:150%;font-size:16px">××××年××月××日</span></p>';`

  constructor(public _userService: UserService,
              public _companyService: CompanyService,
              private router: Router,
              public afAuth: AngularFireAuth,
              public _appConfigService: AppConfigService,
              private elRef: ElementRef) {
    this.datas = [
        {
            "firstName": 'Mark',
            "lastName": 'Otto',
            "userName": '@mdo'
        },
        {
            "firstName": 'Jacob',
            "lastName": 'Thornton',
            "userName": '@fat'
        },
        {
            "firstName": 'Larry',
            "lastName": 'the Bird',
            "userName": '@twitter'
        }
    ];

    this.printCSS = ['http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'];
    this.printStyle =
        `
        .flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

        body {
          margin: 0px 0px 0px 0px;
        }

        @page {
          size: 80mm 55mm;
        }
        th, td {
            color: red !important;
        }
        `;

  }

  ngOnInit() {
    this.Company = this._companyService.LoadCompanyData();
  }
  GotoSignup() {
    this.router.navigateByUrl('/signup');
  }
  GotoForgetPassword() {
    this.router.navigateByUrl('/forget-password');
  }
  Login() {
    // console.log(this.Email);
    // console.log(this.Password);
    // this._userService.LoadUserLocalData().subscribe(data => {
    //   this._userService.SetCurrentUserData(data);
    //   console.log(this._userService.GetCurrentUserData());
    // });
    // this._companyService.LoadCompanyLocalData().subscribe(data => {
    //   this._companyService.SetCurrentCompanyData(data);
    //   console.log(this._companyService.GetCurrentCompanyData());
    //   this.router.navigateByUrl('/main');
    // });
    console.log('b4 auth ', this.afAuth.authState);
    this.afAuth.auth.signInWithEmailAndPassword(this.Email, this.Password)
    .then(data => {
      console.log('a4 auth ', this.afAuth.authState);
      this.User = data;
      this._userService.SetCurrentUserData(this.User);
      this.router.navigateByUrl('/main');
    })
    .catch((error: firebase.FirebaseError)  => {
      console.log(error);
      if (error.code === 'auth/invalid-email') {

      } else if (error.code === 'auth/user-not-found') {

      }
      this.Email = '';
      this.Password = '';
    });
  }
  LoginWithFacebook() {
  //  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    this.afAuth.auth.signInWithPopup(provider)
    .then((authData) => {
      console.log('log fb ', authData);
    //  let user = authData.user;
      console.log('log fb  user', authData.user);
      this.User = authData.user;
      this._userService.SetCurrentUserData(this.User);
      this.router.navigateByUrl('/main');
    }).catch((error) => {
      console.log('log fb ', error);
    });
  }
  LoginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
    .then((authData) => {
      console.log('log gg ', authData);
      this.User = authData.user;
      this._userService.SetCurrentUserData(this.User);
      this.router.navigateByUrl('/main');
    }).catch((error) => {
      console.log('log gg ', error);
    });
  }
  LoginWithTwitter() {
    var provider = new firebase.auth.TwitterAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
    .then((authData) => {
      console.log('log tw ', authData);
      this.User = authData.user;
      this._userService.SetCurrentUserData(this.User);
      this.router.navigateByUrl('/main');
    }).catch((error) => {
    	console.log('log tw ', error);
    });
  }
  getPrintDiv () {
    for (let i: number = 0; i < this.elRef.nativeElement.childNodes.length; i++) {
        let node: any = this.elRef.nativeElement.childNodes[i];
        if (node.id === 'print_div') {
          console.log(this.printDiv);
            this.printDiv = node;
        }
    }
  }
  printComplete () {
      console.log('打印完成！');
      this.showHead = true;
      this.hideTable1 = false;
  }
  customPrint (print: string) {
    this.showHead = false;
    this.hideTable1 = true;
    this.getPrintDiv();
    if (print === 'print1') {
        this.printComponent1.print();
    } else if (print === 'print2') {
        this.printComponent2.print();
    }
  }

  getKzhPrint () {
    for (let i: number = 0; i < this.elRef.nativeElement.childNodes.length; i++) {
      console.log(this.elRef.nativeElement.childNodes[i]);
        let node: any = this.elRef.nativeElement.childNodes[i];
        if (node.id === 'kzh_print') {
            this.kzhPrint = node;
            console.log(this.kzhPrint);
        }
    }
  }
  customKzhPrint (print: string) {
    this.showHead = false;
    this.hideTable1 = true;
    this.getKzhPrint();
    if (print === 'print1') {
        this.printComponent1.print();
    } else if (print === 'print2') {
        this.printComponent2.print();
    }
  }
  GetMasterNewCode() {
    console.log('GetMasterNewCode');
    const aa = this._appConfigService.GetNewCode('ST');
  }
  GetTransactionNewCode() {
    console.log('GetTransactionNewCode');
    const aa = this._appConfigService.GetNewCode('RO');
  }
}
