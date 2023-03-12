import { ErrorComponent } from './error.component';
import { autoSpy } from 'auto-spy';
import { EMPTY } from 'rxjs';

describe('ErrorComponent', () => {
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const e = build();
    // act
    e.ngOnInit();
    // assert
    // expect(e).toEqual
  });
  it('when changeLang is called it should', () => {
    // arrange
    const { build } = setup().default();
    const e = build();
    // act
    e.changeLang('1');
    // assert
    // expect(e).toEqual
  });
  
});

function setup() {
  
  const builder = {
    
    default() {
      return builder;
    },
    build() {
      return new ErrorComponent();
    }
  };

  return builder;
}
