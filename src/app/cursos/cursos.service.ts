import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular 2', 'Java', 'Phone GAP'];
    emitirCursoCriado: EventEmitter<string> = new EventEmitter();

    constructor(private logService: LogService) {
        this.logService.consoleLog('CursosService instance');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`criando novo curso: ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }
}