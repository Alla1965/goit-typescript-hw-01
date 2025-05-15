
function showMessage(message: string): void {
  console.log(message);  
}//showMessage — приймає рядок, нічого не повертає, тип  void

function calc(num1: number, num2: number): number {
  return num1 + num2;
}  //calc — приймає два числа, повертає число

function customError(): never {
  throw new Error('Error');
} //customError — тип never 
