import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export function select(key: string) {
  return (obs: Observable<{ [key: string]: any }>) =>
    obs.pipe(
      map(state => state[key]),
      distinctUntilChanged()
    );
}
