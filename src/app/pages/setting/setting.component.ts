import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ConfirmationService, TreeNode } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { IMenuItemDto } from 'src/app/shared/models';
import { LayoutActions } from 'src/app/stores/layouts/layout.action';
import {
  selectMenuItemError,
  selectMenuItemLoading,
  selectMenuItems,
} from 'src/app/stores/layouts/layout.selector';
import { LayoutState } from 'src/app/stores/layouts/layout.state';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
  providers: [ConfirmationService],
})
export class SettingComponent {
  dataTable: TreeNode[] = [];
  selectedDataTable: TreeNode<any>[] = [];
  columns: any[] = [];
  menuItemForm: FormGroup;

  menuItems$ = this.layoutStore.pipe(select(selectMenuItems));
  loading$ = this.layoutStore.pipe(select(selectMenuItemLoading));
  error$ = this.layoutStore.pipe(select(selectMenuItemError));

  @ViewChild('overlayPanelEdit') overlayPanelEdit: OverlayPanel;

  public get labelInvalid() {
    return this.menuItemForm.get('label')?.invalid && this.menuItemForm.get('label')?.touched;
  }

  constructor(
    private fb: FormBuilder,
    private layoutStore: Store<LayoutState>,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.columns = [
      { field: 'label', header: 'Label' },
      { field: 'icon', header: 'Icon' },
      { field: 'routerLink', header: 'Router Link' },
      { field: '', header: 'Action' },
    ];
    this.menuItems$.subscribe((data: IMenuItemDto[]) => {
      this.dataTable = this.mapToDataTable(data);
    });
  }

  onEditComplete(rowData: any) {
    this.layoutStore.dispatch(LayoutActions.updateMenuItem({ data: rowData }));
  }

  onEditSubmit() {
    if (!this.menuItemForm.valid) return;
    this.layoutStore.dispatch(LayoutActions.updateMenuItem({ data: this.menuItemForm.value }));
  }

  toggleEditOverlayPanel(event: Event, rowData: any) {
    this.initMenuItemForm(rowData);
    this.overlayPanelEdit.toggle(event);
  }

  deleteConfirm(event: Event, rowData: any) {
    this.confirmationService.confirm({
      key: 'deleteConfirm',
      target: event.target || new EventTarget(),
      message: `Are you sure delete menu item '${rowData.label}'?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.layoutStore.dispatch(LayoutActions.deleteMenuItem({ id: rowData.id }));
      }
    });
  }

  private initMenuItemForm(rowData: any) {
    this.menuItemForm = this.fb.group({
      id: [rowData.id],
      label: [rowData.label, Validators.required],
      icon: [rowData.icon],
      routerLink: [rowData.routerLink]
    });
  }

  private mapToDataTable(menuItemDto: IMenuItemDto[]) {
    return menuItemDto.map((item: IMenuItemDto) => {
      const angularItem: any = {
        data: {
          id: item.id,
          label: item.label,
          icon: item.icon,
          routerLink: item.routerLink,
        },
        children: item.childMenuItems
          ? this.mapToDataTable(item.childMenuItems)
          : null,
      };

      if (item.childMenuItems && item.childMenuItems.length > 0) {
        angularItem.children = this.mapToDataTable(item.childMenuItems);
      }

      return angularItem;
    });
  }
}
