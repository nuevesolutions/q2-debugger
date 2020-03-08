import { useContext } from 'react';
import LoggerContext from '../contexts/Logger';

export default function useLogger() {
  return useContext(LoggerContext);
}
