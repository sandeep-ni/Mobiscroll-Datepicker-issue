import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Drawer } from '@ni/nimble-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MobiscrollDatePicker';

  @ViewChildren('drawer') private readonly drawerRef = new QueryList<ElementRef<Drawer>>();

  public openSlideout() {
    this.drawer.nativeElement.show();
  }

  public slideoutClosed() {
    this.drawer.nativeElement.close();
  }

  private get drawer(): ElementRef<Drawer> | undefined {
    return (this.drawerRef.first as ElementRef<Drawer> | undefined);
}
}
