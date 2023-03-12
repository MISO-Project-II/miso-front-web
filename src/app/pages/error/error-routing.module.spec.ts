import { ErrorRoutingModule } from './error-routing.module';
import { autoSpy } from 'auto-spy';
import { EMPTY } from 'rxjs';

describe('ErrorRoutingModule', () => {
  
  it('it should construct', () => {
    // arrange
    const { build } = setup().default();
    // act
    const e = build();
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
      return new ErrorRoutingModule();
    }
  };

  return builder;
}
