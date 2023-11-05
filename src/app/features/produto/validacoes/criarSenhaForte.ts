import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function criarSenhaForte(): ValidatorFn
{
  return (control: AbstractControl): ValidationErrors | null =>
  {
    const values =  control.value;

    if(!values)
    {
      return null;
    }

  const temCaracterMaiusculo = /[A-Z]+/.test(values);

  const temCaracterMinusculo = /[a-z]+/.test(values);

  const temCaracterNumerico = /[0-9]+/.test(values);

  const senhaValida = temCaracterMaiusculo && temCaracterMinusculo && temCaracterNumerico;

  return !senhaValida ? {senhaForte: true}: null;

  }

}
