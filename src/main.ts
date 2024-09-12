import Phaser from 'phaser';
import { scenes } from './scenes/index';
import './style.css';

new Phaser.Game({
  width: 800,
  heigth: 600,
  title: 'Phaser RPG',
  scene: scenes,
  url: import.meta.env.URL || '',
  version: import.meta.env.version || '0.0.1',
  backgroundColor: '#000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,
});
