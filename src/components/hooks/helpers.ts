export function EmailValidate(email: string): string {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(email);
  return isValid ? "" : "Invalid email address";
}

export function PasswordValidate(password: string): string {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const isValid = passwordPattern.test(password);
  return isValid ? "" : "Password must be at least 8 characters long";
}

export function NameValidate(name: string): string {
  const namePattern = /^[A-Za-z\s]{3,}$/;
  const isValid = namePattern.test(name.trim());
  return isValid ? "" : "Enter a valid name";
}

export function PhoneValidate(phone: string): string {
  const phonePattern = /^[6-9]\d{9}$/;
  const isValid = phonePattern.test(phone.trim());
  return isValid ? "" : "Enter a valid 10-digit phone number";
}
