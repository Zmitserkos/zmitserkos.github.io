import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'matchesCompleted',
  pure: false
})

@Injectable()
export class MatchesCompletedPipe implements PipeTransform {
  transform(items: Todo[], completed: boolean): Todo[] {
    return items.filter( item => (item.completed === completed) || (completed === null) || (completed === undefined) );
  }
}
