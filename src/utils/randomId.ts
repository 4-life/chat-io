export default function randomId(): number {
  return new Date().getTime() + Math.ceil(Math.random() * 10000);
}
