import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { getApiBaseUrl } from '../config/api';

@Injectable({ providedIn: 'root'})
export class AuthService {
    private apiUrl = `${getApiBaseUrl()}/auth`; 

    constructor(private http: HttpClient) { }

  fazerLogin(credenciais: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciais).pipe(
      tap((resposta: any) => {
        localStorage.setItem('token', resposta.token);
        localStorage.setItem('perfil', resposta.perfil);
        localStorage.setItem('usuarioId', String(resposta.id));
        localStorage.setItem('nome', resposta.nome);
        localStorage.setItem('usuarioLogado', JSON.stringify(resposta));
      })
    );
  }

  sair(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  isLogado(): boolean {
    return !!localStorage.getItem('token');
  }

  getPerfil(): string | null {
    return localStorage.getItem('perfil');
  }

  getUsuarioId(): string | null {
    return localStorage.getItem('usuarioId');
  }

  getUsuarioLogado(): any {
    const dados = localStorage.getItem('usuarioLogado');
    try {
      return dados ? JSON.parse(dados) : null;
    } catch {
      return null;
    }
  }
}
