import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { UnlessModule } from './unless.module';

@Component({ template: '' })
class TestComponent {
  condition = true;
}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
      .createComponent(TestComponent);
}

describe('UnlessDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  function getComponent(): TestComponent { return fixture.componentInstance; }

  afterEach(() => fixture = null);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports     : [UnlessModule],
    });
  });

  it('should work in a template attribute', async(() => {
    fixture = createTestComponent('<div *ngxUnless="condition">Hello1</div>');
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  }));

  it('should work on a template element', async(() => {
    fixture = createTestComponent('<ng-template [ngxUnless]="condition">Hello2</ng-template>');
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  }));

  it('should toggle node when condition changes', async(() => {
    fixture = createTestComponent('<div *ngIf="condition">hello3</div>');
    getComponent().condition = false;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();

    getComponent().condition = true;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();

    getComponent().condition = false;
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  }));

});
