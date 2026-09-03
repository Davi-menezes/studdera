import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QUESTIONS_POOL } from '../../models/questions.data';

type Difficulty = 'easy' | 'medium' | 'hard' | 'extreme';

@Component({
  selector: 'app-simulados',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './simulados.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimuladosComponent {
  readonly subjects = Object.keys(QUESTIONS_POOL);
  readonly difficulty = signal<Difficulty>('medium');
  readonly selectedSubject = signal(this.subjects[0] ?? '');
  readonly difficultyOptions: { value: Difficulty; label: string; description: string }[] = [
    { value: 'easy', label: 'Fácil', description: 'Para reforçar a base' },
    { value: 'medium', label: 'Médio', description: 'Para ganhar ritmo' },
    { value: 'hard', label: 'Difícil', description: 'Para se desafiar' },
    { value: 'extreme', label: 'Extremo', description: 'Máxima exigência' },
  ];
  readonly selectedLabel = computed(() => this.difficultyOptions.find(item => item.value === this.difficulty())?.label ?? 'Médio');
}
