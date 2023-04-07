import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { IItemDto } from 'src/app/utils/models/items/item-dto';
import { IPagedResultDto } from 'src/app/utils/models/paged-result-dto';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public pagedResultDto!: IPagedResultDto<IItemDto>;

  constructor(private baseService: BaseService<IPagedResultDto<IItemDto>>) { }

  ngOnInit(): void {
    this.baseService.getAll('Items?maxResultCount=9&skipCount=0')
      .subscribe((pagedResultDto: IPagedResultDto<IItemDto>) => {
        this.pagedResultDto = pagedResultDto;
      });
  }
}
