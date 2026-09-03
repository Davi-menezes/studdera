import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerificationSentComponent } from './components/verification-sent/verification-sent.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreditsComponent } from './components/credits/credits.component';
import { VestibularesComponent } from './components/vestibulares/vestibulares.component';
import { StudyPlanComponent } from './components/study-plan/study-plan.component';
import { VerifyEmailComponent } from './app/components/verify-email/verify-email.component';
import { EmailVerifiedComponent } from './app/components/email-verified/email-verified.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TermsComponent } from './components/terms/terms.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { QuestionGoalsComponent } from './components/question-goals/question-goals.component';
import { ChatComponent } from './components/chat/chat.component';
import { SimuladosComponent } from './components/simulados/simulados.component';
import { authGuard } from './guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Plano de Estudos Personalizado para Vestibular e ENEM | Studdera',
    data: {
      description: 'Crie um plano de estudos personalizado para vestibular e ENEM com IA. Estude com simulados por dificuldade, flashcards inteligentes, metas e tutor virtual.',
      keywords: 'plano de estudos personalizado para vestibular e enem, plano de estudos para vestibular, plano de estudos enem, simulados enem, flashcards vestibular'
    }
  },
  {
    path: 'chat',
    component: ChatComponent,
    title: 'Chat de Estudos - Studdera',
    canActivate: [authGuard],
    data: { description: 'Tire dúvidas e estude com o tutor virtual do Studdera.', robots: 'noindex, nofollow' }
  },
  {
    path: 'simulados',
    component: SimuladosComponent,
    title: 'Simulados para Vestibular - Studdera',
    canActivate: [authGuard],
    data: { description: 'Escolha matéria e dificuldade para o seu próximo simulado Studdera.', robots: 'noindex, nofollow' }
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Entrar - Studdera',
    data: {
      description: 'Acesse sua conta Studdera e continue sua jornada rumo à aprovação no vestibular.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Recuperar Senha - Studdera',
    data: { description: 'Recupere o acesso à sua conta Studdera.', robots: 'noindex, nofollow' }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    title: 'Redefinir Senha - Studdera',
    data: { description: 'Redefina sua senha para voltar aos seus estudos no Studdera.', robots: 'noindex, nofollow' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Criar Conta Grátis - Studdera',
    data: {
      description: 'Crie sua conta gratuita no Studdera e comece hoje seu plano de estudos personalizado para o vestibular e ENEM com inteligência artificial.',
      keywords: 'plano de estudos personalizado para vestibular e enem, cadastro studdera',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: 'terms',
    component: TermsComponent,
    title: 'Termos de Uso - Studdera',
    data: {
      description: 'Leia os termos de uso e a política de privacidade do Studdera.',
      robots: 'index, follow'
    }
  },
  { path: 'cadastro', redirectTo: 'register', pathMatch: 'full' },
  {
    path: 'verification-sent',
    component: VerificationSentComponent,
    title: 'Verifique seu E-mail - Studdera',
    data: { description: 'Confira as instruções para verificar seu e-mail no Studdera.', robots: 'noindex, nofollow' }
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    title: 'Verificando E-mail - Studdera',
    data: { description: 'Verificando seu e-mail para ativar sua conta Studdera.', robots: 'noindex, nofollow' }
  },
  {
    path: 'auth/callback',
    component: AuthCallbackComponent,
    title: 'Autenticando - Studdera',
    data: { description: 'Concluindo sua autenticação no Studdera.', robots: 'noindex, nofollow' }
  },
  {
    path: 'verify-email/:token',
    component: VerifyEmailComponent,
    title: 'Verificando E-mail - Studdera',
    data: { description: 'Seu e-mail Studdera foi verificado.', robots: 'noindex, nofollow' }
  },
  {
    path: 'email-verified',
    component: EmailVerifiedComponent,
    title: 'E-mail Verificado - Studdera',
    data: { description: 'Gerencie seu perfil e suas preferências no Studdera.', robots: 'noindex, nofollow' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Meu Perfil - Studdera',
    canActivate: [authGuard],
    data: { robots: 'noindex, nofollow' }
  },
  {
    path: 'credits',
    component: CreditsComponent,
    title: 'Comprar Créditos - Studdera',
    canActivate: [authGuard],
    data: {
      description: 'Adquira créditos para usar todos os recursos avançados de IA do Studdera: chat, simulados e plano de estudos sem limites.',
      keywords: 'comprar creditos studdera, plano premium estudos, ia educacao preco',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: 'vestibulares',
    component: VestibularesComponent,
    title: 'Guia de Vestibulares 2026 - Studdera',
    canActivate: [authGuard],
    data: {
      description: 'Calendário e informações completas dos principais vestibulares do Brasil em 2026: ENEM, FUVEST, UNICAMP, UNESP, UFRJ e mais. Datas de inscrição e provas.',
      keywords: 'calendario vestibular 2026, datas enem 2026, inscricao fuvest, unicamp vestibular, vestibulares brasil',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: 'study-plan',
    component: StudyPlanComponent,
    title: 'Meu Plano de Estudos - Studdera',
    canActivate: [authGuard],
    data: {
      description: 'Seu cronograma de estudos personalizado gerado por inteligência artificial com base no seu vestibular-alvo, pontos fracos e disponibilidade de horários.',
      keywords: 'cronograma de estudos personalizado, plano de estudos vestibular ia, organizacao estudos enem',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: 'flashcards',
    component: FlashcardsComponent,
    title: 'Flashcards Inteligentes - Studdera',
    canActivate: [authGuard],
    data: {
      description: 'Crie e revise flashcards com inteligência artificial. Sistema de repetição espaçada para memorização eficiente das matérias do vestibular e ENEM.',
      keywords: 'flashcards vestibular, revisao espacada, memorizacao materias, flashcards ia, estudo ativo',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: 'question-goals',
    component: QuestionGoalsComponent,
    title: 'Meta de Questões Diárias - Studdera',
    canActivate: [authGuard],
    data: {
      description: 'Defina e acompanhe sua meta diária de questões resolvidas. Mantenha a consistência nos estudos com o rastreador de progresso do Studdera.',
      keywords: 'meta de questoes diarias, progresso estudos, consistencia vestibular, rastreador de estudo',
      robots: 'noindex, nofollow'
    }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
