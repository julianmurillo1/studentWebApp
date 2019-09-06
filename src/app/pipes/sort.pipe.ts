import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe  implements PipeTransform {
  transform(array: any, field: string, ord:string): any[] {
    console.log(ord)
    if (!Array.isArray(array)) {
      return;
    }




    if(ord=='DESC'){
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    }




    if(ord=='ASC'){
    array.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    }



    return array;
  }
}