import {LEVEL,OBJECT_TYPE} from './setup';

//DOM Elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

//Game constants
const POWER_PILL_TIME = 10000;//IN MILLISEC
const GLOBAL_SPEED = 80;//MS

//initail setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman,grid){}
function checkPosition(pacman,ghosts){}
function gameLoop(pacman,ghosts){}
function startGame(){}
