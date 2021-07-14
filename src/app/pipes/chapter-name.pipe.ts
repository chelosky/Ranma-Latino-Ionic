import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chapterName'
})
export class ChapterNamePipe implements PipeTransform {

  transform(name: string): unknown {
    //  001-Un-extraño-viene-de-chica.mp4 => [ 001-Un-extraño-viene-de-chica , mp4 ]
    let nameExtensionSplit = name.split('.')
    // 001-Un-extraño-viene-de-chica => [Un,extraño,viene,de,chica]
    let nameCorrelativeSplit = nameExtensionSplit[0].split('-').slice(1);
    return nameCorrelativeSplit.join(' ');
  }

}
