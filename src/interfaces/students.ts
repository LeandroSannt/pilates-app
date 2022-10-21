export interface StudentProps{
  id: 34,
  registration: number,
  name: string ,
  email?: string,
  telephone: string,
  telephone_emergency?: string,
  birth_date: string,
  plan_id: number,
  plan_expiration_day: string,
  current_month_plan: 1,
  objective: string ,
  status: 'vencido' | 'a vencer' | 'inativo' | 'ativo',
  created_at:string,
  updated_at: string,
  date_start_plan: string
}