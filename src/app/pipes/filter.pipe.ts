import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

searchText = searchText.toLowerCase();
const matchBy = ['First Name','Home Phone'];
return items.filter( it => {
	for (var key in matchBy) {
	if(it[matchBy[key]].toLowerCase().indexOf(searchText) != -1){
      return (it[matchBy[key]].toLowerCase().includes(searchText) );
	}
	}
    });
   }
}