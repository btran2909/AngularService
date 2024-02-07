import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { loadScript } from './load-script';
import { sampleData } from './sample';

declare module unlayer {
  function init(object: any): void;
  function createEditor(object: any): void;
  function loadDesign(object: any): void;
  function saveDesign(callback: () => void): void;
  function exportHtml(callback: (html: string) => void): void;
}

export interface UnlayerOptions {
  projectId?: number;
  tools?: object;
  appearance?: object;
  locale?: string;
}

let lastEditorId = 0;

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrl: './email-editor.component.scss',
})
export class EmailEditorComponent implements OnInit {
  @Input() editorId: string;
  @Input() options: UnlayerOptions = {};
  @Input() projectId: number;
  @Input() tools: object;
  @Input() appearance: object;
  @Input() locale: string;
  @Input() id: string;
  @Input() minHeight = '500px';

  @Output() loaded = new EventEmitter();
  @Output() ready = new EventEmitter();

  editor: any;
  isLoading: boolean = true;

  constructor(private elementRef: ElementRef) {
    this.id = this.editorId || `editor-${++lastEditorId}`;
  }

  ngOnInit() {
    const layoutMainElement =
      this.elementRef.nativeElement.closest('.layout-main');
    if (layoutMainElement) {
      this.minHeight = layoutMainElement.offsetHeight + 'px';
    }
    loadScript(this.loadEditor.bind(this));
  }

  loadDesign(data: object) {
    this.editor.loadDesign(data);
  }

  saveDesign() {
    this.editor.saveDesign((design: any) => {
      console.log('saveDesign', JSON.stringify(design));
    });
  }

  exportHtml() {
    this.editor.exportHtml((data: any) => {
      const html = data.html
        .replace(/\\n\\n/g, ' ')
        .replace(/\\n/g, ' ')
        .replace(/\\"/g, '"');
      console.log('exportHtml', html);
    });
  }

  protected loadEditor() {
    const options: UnlayerOptions = this.options || {};

    if (this.projectId) {
      options.projectId = this.projectId;
    }

    if (this.tools) {
      options.tools = this.tools;
    }

    if (this.appearance) {
      options.appearance = this.appearance;
    }

    if (this.locale) {
      options.locale = this.locale;
    }

    this.editor = unlayer.createEditor({
      ...options,
      id: this.id,
      displayMode: 'email',
      source: {
        name: 'email-editor',
        version: '0.0.1',
      },
      fonts: {
        showDefaultFonts: false,
        customFonts: [
          {
            label: 'Andale Mono',
            value: 'andale mono,times',
          },
          {
            label: 'Arial',
            value: 'arial,helvetica,sans-serif',
          },
          {
            label: 'Arial Black',
            value: 'arial black,avant garde,arial',
          },
          {
            label: 'Book Antiqua',
            value: 'book antiqua,palatino',
          },
          {
            label: 'Comic Sans MS',
            value: 'comic sans ms,sans-serif',
          },
          {
            label: 'Courier New',
            value: 'courier new,courier',
          },
          {
            label: 'Georgia',
            value: 'georgia,palatino',
          },
          {
            label: 'Helvetica',
            value: 'helvetica,sans-serif',
          },
          {
            label: 'Impact',
            value: 'impact,chicago',
          },
          {
            label: 'Symbol',
            value: 'symbol',
          },
          {
            label: 'Tahoma',
            value: 'tahoma,arial,helvetica,sans-serif',
          },
          {
            label: 'Terminal',
            value: 'terminal,monaco',
          },
          {
            label: 'Times New Roman',
            value: 'times new roman,times',
          },
          {
            label: 'Trebuchet MS',
            value: 'trebuchet ms,geneva',
          },
          {
            label: 'Verdana',
            value: 'verdana,geneva',
          },
          {
            label: 'Lobster Two',
            value: "'Lobster Two',cursive",
            url: 'https://fonts.googleapis.com/css?family=Lobster+Two:400,700',
          },
          {
            label: 'Playfair Display',
            value: "'Playfair Display',serif",
            url: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700',
          },
          {
            label: 'Rubik',
            value: "'Rubik',sans-serif",
            url: 'https://fonts.googleapis.com/css?family=Rubik:400,700',
          },
          {
            label: 'Source Sans Pro',
            value: "'Source Sans Pro',sans-serif",
            url: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700',
          },
          {
            label: 'Open Sans',
            value: "'Open Sans',sans-serif",
            url: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700',
          },
          {
            label: 'Crimson Text',
            value: "'Crimson Text',serif",
            url: 'https://fonts.googleapis.com/css?family=Crimson+Text:400,700',
          },
          {
            label: 'Montserrat',
            value: "'Montserrat',sans-serif",
            url: 'https://fonts.googleapis.com/css?family=Montserrat:400,700',
          },
          {
            label: 'Old Standard TT',
            value: "'Old Standard TT',serif",
            url: 'https://fonts.googleapis.com/css?family=Old+Standard+TT:400,700',
          },
          {
            label: 'Lato',
            value: "'Lato',sans-serif",
            url: 'https://fonts.googleapis.com/css?family=Lato:400,700',
          },
          {
            label: 'Raleway',
            value: "'Raleway',sans-serif",
            url: 'https://fonts.googleapis.com/css?family=Raleway:400,700',
          },
          {
            label: 'Cabin',
            value: "'Cabin',sans-serif",
            url: 'https://fonts.googleapis.com/css?family=Cabin:400,700',
          },
          {
            label: 'Pacifico',
            value: "'Pacifico',cursive",
            url: 'https://fonts.googleapis.com/css?family=Pacifico',
          },
        ],
      }
    });

    this.loadDesign(sampleData);
    this.loaded.emit({});

    this.editor.addEventListener('editor:ready', () => {
      this.ready.emit({});
      this.isLoading = false;
    });
  }
}
