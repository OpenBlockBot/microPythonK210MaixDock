const { formatMessage, ArgumentType, BlockType, ProgramModeType, CommonPeripheral } = window.Scratch;

const PNPID_LIST = [
    // CH340
    'USB\\VID_1A86&PID_7523'
];

const SERIAL_CONFIG = {
    baudRate: 115200,
    dataBits: 8,
    stopBits: 1,
    dtr: false,
    rts: false
};

const DIVECE_OPT = {
    type: 'microPython',
    chip: 'k210',
    baud: '1500000',
    firmware: 'maixpy-k210.bin',
    board: 'dan',
    dtr: false,
    rts: false
};

const Pins = {
    IO0: '0', IO1: '1', IO2: '2', IO3: '3', IO4: '4', IO5: '5',
    IO6: '6', IO7: '7', IO8: '8', IO9: '9', IO10: '10', IO11: '11',
    IO12: '12', IO13: '13', IO14: '14', IO15: '15', IO16: '16', IO17: '17',
    IO18: '18', IO19: '19', IO20: '20', IO21: '21', IO22: '22', IO23: '23',
    IO24: '24', IO25: '25', IO26: '26', IO27: '27', IO28: '28', IO29: '29',
    IO30: '30', IO31: '31', IO32: '32', IO33: '33', IO34: '34', IO35: '35',
    IO36: '36', IO37: '37', IO38: '38', IO39: '39', IO40: '40', IO41: '41',
    IO42: '42', IO43: '43', IO44: '44', IO45: '45', IO46: '46', IO47: '47'
};

const Level = {
    High: '1',
    Low: '0'
};

const Channels = {
    CH0: '0', CH1: '1', CH2: '2', CH3: '3', CH4: '4', CH5: '5',
    CH6: '6', CH7: '7', CH8: '8', CH9: '9', CH10: '10', CH11: '11'
};

const SerialNo = {
    Serial1: '1',
    Serial2: '2',
    Serial3: '3'
};

const Buadrate = {
    B4800: '4800',
    B9600: '9600',
    B19200: '19200',
    B38400: '38400',
    B57600: '57600',
    B76800: '76800',
    B115200: '115200'
};

const Eol = {
    Warp: 'warp',
    NoWarp: 'noWarp'
};

const Mode = {
    Input: 'PULL_NONE',
    Output: 'OUT',
    InputPullup: 'PULL_UP',
    InputPulldown: 'PULL_DOWN'
};

const InterrupMode = {
    Rising: 'IRQ_RISING',
    Falling: 'IRQ_FALLING',
    Change: 'IRQ_BOTH'
};

class MicroPythonK210MaixDock extends CommonPeripheral {
    constructor (runtime, deviceId) {
        super(runtime, deviceId, PNPID_LIST, SERIAL_CONFIG, DIVECE_OPT);
    }
}

class OpenBlockMicroPythonK210MaixDockDevice {
    get DEVICE_ID () {
        return 'microPythonK210MaixDock';
    }

    get PINS_MENU () {
        return [
            { text: 'IO0', value: Pins.IO0 },
            { text: 'IO1', value: Pins.IO1 },
            { text: 'IO2', value: Pins.IO2 },
            { text: 'IO3', value: Pins.IO3 },
            { text: 'IO6', value: Pins.IO6 },
            { text: 'IO7', value: Pins.IO7 },
            { text: 'IO8', value: Pins.IO8 },
            { text: 'IO9', value: Pins.IO9 },
            { text: 'IO10', value: Pins.IO10 },
            { text: 'IO11', value: Pins.IO11 },
            { text: 'IO12', value: Pins.IO12 },
            { text: 'IO13', value: Pins.IO13 },
            { text: 'IO14', value: Pins.IO14 },
            { text: 'IO15', value: Pins.IO15 },
            { text: 'IO16', value: Pins.IO16 },
            { text: 'IO17', value: Pins.IO17 },
            { text: 'IO18', value: Pins.IO18 },
            { text: 'IO19', value: Pins.IO19 },
            { text: 'IO20', value: Pins.IO20 },
            { text: 'IO21', value: Pins.IO21 },
            { text: 'IO22', value: Pins.IO22 },
            { text: 'IO23', value: Pins.IO23 },
            { text: 'IO24', value: Pins.IO24 },
            { text: 'IO25', value: Pins.IO25 },
            { text: 'IO26', value: Pins.IO26 },
            { text: 'IO27', value: Pins.IO27 },
            { text: 'IO28', value: Pins.IO28 },
            { text: 'IO29', value: Pins.IO29 },
            { text: 'IO30', value: Pins.IO30 },
            { text: 'IO31', value: Pins.IO31 },
            { text: 'IO32', value: Pins.IO32 },
            { text: 'IO33', value: Pins.IO33 },
            { text: 'IO34', value: Pins.IO34 },
            { text: 'IO35', value: Pins.IO35 },
            { text: 'IO36', value: Pins.IO36 },
            { text: 'IO37', value: Pins.IO37 },
            { text: 'IO38', value: Pins.IO38 },
            { text: 'IO39', value: Pins.IO39 },
            { text: 'IO40', value: Pins.IO40 },
            { text: 'IO41', value: Pins.IO41 },
            { text: 'IO42', value: Pins.IO42 }
        ];
    }

    get DEFAULT_PIN () {
        return Pins.IO8;
    }

    get MODE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.modeMenu.input',
                    default: 'input',
                    description: 'label for input pin mode'
                }),
                value: Mode.Input
            },
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.modeMenu.output',
                    default: 'output',
                    description: 'label for output pin mode'
                }),
                value: Mode.Output
            },
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.modeMenu.inputPullup',
                    default: 'input-pullup',
                    description: 'label for input-pullup pin mode'
                }),
                value: Mode.InputPullup
            },
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.modeMenu.inputPulldown',
                    default: 'input-pulldown',
                    description: 'label for input-pulldown pin mode'
                }),
                value: Mode.InputPulldown
            }
        ];
    }

    get LEVEL_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.levelMenu.high',
                    default: 'high',
                    description: 'label for high level'
                }),
                value: Level.High
            },
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.levelMenu.low',
                    default: 'low',
                    description: 'label for low level'
                }),
                value: Level.Low
            }
        ];
    }

    get TIMER_CHANNELS_MENU () {
        return [
            { text: 'CH0 (T0)', value: Channels.CH0 },
            { text: 'CH1 (T0)', value: Channels.CH1 },
            { text: 'CH2 (T0)', value: Channels.CH2 },
            { text: 'CH3 (T0)', value: Channels.CH3 },
            { text: 'CH4 (T1)', value: Channels.CH4 },
            { text: 'CH5 (T1)', value: Channels.CH5 },
            { text: 'CH6 (T1)', value: Channels.CH6 },
            { text: 'CH7 (T1)', value: Channels.CH7 },
            { text: 'CH8 (T2)', value: Channels.CH8 },
            { text: 'CH9 (T2)', value: Channels.CH9 },
            { text: 'CH10 (T2)', value: Channels.CH10 },
            { text: 'CH11 (T2)', value: Channels.CH11 }
        ];
    }

    get INTERRUP_MODE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.InterrupModeMenu.risingEdge',
                    default: 'rising edge',
                    description: 'label for rising edge interrup'
                }),
                value: InterrupMode.Rising
            },
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.InterrupModeMenu.fallingEdge',
                    default: 'falling edge',
                    description: 'label for falling edge interrup'
                }),
                value: InterrupMode.Falling
            },
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.InterrupModeMenu.changeEdge',
                    default: 'change edge',
                    description: 'label for change edge interrup'
                }),
                value: InterrupMode.Change
            }
        ];
    }

    get SERIAL_NO_MENU () {
        return [
            { text: '1', value: SerialNo.Serial1 },
            { text: '2', value: SerialNo.Serial2 },
            { text: '3', value: SerialNo.Serial3 }
        ];
    }

    get DEFAULT_SERIAL_RX_PIN () {
        return Pins.IO8;
    }

    get DEFAULT_SERIAL_TX_PIN () {
        return Pins.IO9;
    }

    get BAUDTATE_MENU () {
        return [
            { text: '4800', value: Buadrate.B4800 },
            { text: '9600', value: Buadrate.B9600 },
            { text: '19200', value: Buadrate.B19200 },
            { text: '38400', value: Buadrate.B38400 },
            { text: '57600', value: Buadrate.B57600 },
            { text: '76800', value: Buadrate.B76800 },
            { text: '115200', value: Buadrate.B115200 }
        ];
    }

    get EOL_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.eolMenu.warp',
                    default: 'warp',
                    description: 'label for warp print'
                }),
                value: Eol.Warp
            },
            {
                text: formatMessage({
                    id: 'microPythonK210MaixDock.eolMenu.noWarp',
                    default: 'no-warp',
                    description: 'label for no warp print'
                }),
                value: Eol.NoWarp
            }
        ];
    }

    constructor (runtime) {
        this.runtime = runtime;
        this._peripheral = new MicroPythonK210MaixDock(this.runtime, this.DEVICE_ID);
    }

    getInfo () {
        return [
            {
                id: 'pin',
                name: formatMessage({
                    id: 'microPythonK210MaixDock.category.pins',
                    default: 'Pins',
                    description: 'The name of the K210 microPython device pin category'
                }),
                color1: '#4C97FF',
                color2: '#3373CC',
                color3: '#3373CC',

                blocks: [
                    {
                        opcode: 'k210SetPinMode',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.pins.k210SetPinMode',
                            default: 'set pin [PIN] mode [MODE]',
                            description: 'MicroPython K210 set pin mode'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_PIN },
                            MODE: { type: ArgumentType.STRING, menu: 'mode', defaultValue: Mode.Input }
                        }
                    },
                    {
                        opcode: 'setDigitalOutput',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.pins.setDigitalOutput',
                            default: 'set digital pin [PIN] out [LEVEL]',
                            description: 'MicroPython K210 set digital pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_PIN },
                            LEVEL: { type: ArgumentType.STRING, menu: 'level', defaultValue: Level.High }
                        }
                    },
                    {
                        opcode: 'k210SetPwmOutput',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.pins.k210SetPwmOutput',
                            default: 'set pwm pin [PIN] use channel [CH] out [OUT]',
                            description: 'MicroPython K210 set pwm pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_PIN },
                            OUT: { type: ArgumentType.INTOTO100_NUMBER, defaultValue: '0' },
                            CH: { type: ArgumentType.NUMBER, menu: 'timerChannels', defaultValue: Channels.CH0 }
                        }
                    },
                    '---',
                    {
                        opcode: 'readDigitalPin',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.pins.readDigitalPin',
                            default: 'read digital pin [PIN]',
                            description: 'MicroPython K210 read digital pin'
                        }),
                        blockType: BlockType.BOOLEAN,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_PIN }
                        }
                    },
                    '---',
                    {
                        opcode: 'k210SetServoOutput',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.pins.k210SetServoOutput',
                            default: 'set servo pin [PIN] use channel [CH] out [OUT]',
                            description: 'MicroPython K210 set servo pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_PIN },
                            OUT: { type: ArgumentType.HALF_ANGLE, defaultValue: '0' },
                            CH: { type: ArgumentType.NUMBER, menu: 'timerChannels', defaultValue: Channels.CH0 }
                        }
                    },
                    '---',
                    {
                        opcode: 'k210AttachInterrupt',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.pins.k210AttachInterrupt',
                            default: 'attach interrupt pin [PIN] mode [MODE] executes',
                            description: 'MicroPython K210 attach interrupt'
                        }),
                        blockType: BlockType.CONDITIONAL,
                        arguments: {
                            PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_PIN },
                            MODE: { type: ArgumentType.STRING, menu: 'interruptMode', defaultValue: InterrupMode.Rising }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    pins: { items: this.PINS_MENU },
                    mode: { items: this.MODE_MENU },
                    level: { acceptReporters: true, items: this.LEVEL_MENU },
                    timerChannels: { items: this.TIMER_CHANNELS_MENU },
                    interruptMode: { items: this.INTERRUP_MODE_MENU }
                }
            },
            {
                id: 'serial',
                name: formatMessage({
                    id: 'microPythonK210MaixDock.category.serial',
                    default: 'Serial',
                    description: 'The name of the MicroPython K210 device serial category'
                }),
                color1: '#9966FF',
                color2: '#774DCB',
                color3: '#774DCB',

                blocks: [
                    {
                        opcode: 'k210SerialBegin',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.serial.k210SerialBegin',
                            default: 'serial [NO] begin baudrate [BAUD] pin RX [RX_PIN] TX [TX_PIN]',
                            description: 'MicroPython K210 multi serial begin'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            NO: { type: ArgumentType.NUMBER, menu: 'serialNo', defaultValue: SerialNo.Serial1 },
                            BAUD: { type: ArgumentType.STRING, menu: 'baudrate', defaultValue: Buadrate.B115200 },
                            RX_PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_SERIAL_RX_PIN },
                            TX_PIN: { type: ArgumentType.STRING, menu: 'pins', defaultValue: this.DEFAULT_SERIAL_TX_PIN }
                        }
                    },
                    {
                        opcode: 'multiSerialPrint',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.serial.serialPrint',
                            default: 'serial [NO] print [VALUE] [EOL]',
                            description: 'MicroPython K210 multi serial print'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            NO: { type: ArgumentType.NUMBER, menu: 'serialNo', defaultValue: SerialNo.Serial1 },
                            VALUE: { type: ArgumentType.STRING, defaultValue: 'Hello OpenBlock' },
                            EOL: { type: ArgumentType.STRING, menu: 'eol', defaultValue: Eol.Warp }
                        }
                    },
                    {
                        opcode: 'multiSerialReadALine',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.serial.serialReadALine',
                            default: 'serial [NO] read a line',
                            description: 'MicroPython K210 multi serial read a line'
                        }),
                        arguments: {
                            NO: { type: ArgumentType.NUMBER, menu: 'serialNo', defaultValue: SerialNo.Serial1 }
                        },
                        blockType: BlockType.REPORTER
                    }
                ],
                menus: {
                    baudrate: { items: this.BAUDTATE_MENU },
                    serialNo: { items: this.SERIAL_NO_MENU },
                    pins: { items: this.PINS_MENU },
                    eol: { items: this.EOL_MENU }
                }
            },
            {
                id: 'console',
                name: formatMessage({
                    id: 'microPythonK210MaixDock.category.console',
                    default: 'Console',
                    description: 'The name of the K210 microPython device console category'
                }),
                color1: '#FF3399',
                color2: '#CC297A',
                color3: '#CC297A',

                blocks: [
                    {
                        opcode: 'consolePrint',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.console.consolePrint',
                            default: 'print [TEXT] [EOL]',
                            description: 'MicrpPython console print'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            TEXT: { type: ArgumentType.STRING, defaultValue: 'Hello OpenBlock' },
                            EOL: { type: ArgumentType.STRING, menu: 'eol', defaultValue: Eol.Warp }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'consoleInput',
                        text: formatMessage({
                            id: 'microPythonK210MaixDock.console.consoleInput',
                            default: 'prompt [TEXT] and read input',
                            description: 'MicrpPython console input'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            TEXT: { type: ArgumentType.STRING, defaultValue: 'Input a number:' }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    eol: { items: this.EOL_MENU }
                }
            }
        ];
    }
}

export default OpenBlockMicroPythonK210MaixDockDevice;
