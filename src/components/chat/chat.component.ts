import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkdownModule, KatexOptions } from 'ngx-markdown';
import { GeminiService } from '../../services/gemini.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownModule],
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  readonly geminiService = inject(GeminiService);
  readonly userService = inject(UserService);
  private readonly router = inject(Router);

  readonly userInput = signal('');
  readonly hasStartedChat = computed(() => this.geminiService.messages().length > 1);
  readonly katexOptions: KatexOptions = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
  };

  constructor() {
    this.geminiService.initGreeting();
  }

  async sendMessage(): Promise<void> {
    const prompt = this.userInput().trim();
    if (!prompt) return;
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.geminiService.messages.update(messages => [...messages, { role: 'user', content: prompt }]);
    this.userInput.set('');
    const response = await this.geminiService.generateResponse(prompt, this.geminiService.messages());
    this.geminiService.messages.update(messages => [...messages, { role: 'model', content: response }]);
  }
}
