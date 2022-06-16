import axios from 'axios';

export default function Api() {
  const instanceAxios = axios.create({
    timeout: 300,
  });

  return instanceAxios;
}
