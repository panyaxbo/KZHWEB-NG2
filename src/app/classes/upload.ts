export class Upload {

    $key: string;
    File: File;
    Name: string;
    Url: string;
    Progress: number;
    CreateAt: Date = new Date();

    constructor(file: File) {
      this.File = file;
    }
}
