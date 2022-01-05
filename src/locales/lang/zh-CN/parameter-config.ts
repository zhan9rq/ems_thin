export default {
  title: '参数配置',
  loadingTip: '请求中..',
  tab: {
    tabName: {
      general: '通用配置',
      cellBasicConfig: '小区基本配置',
      cellAdvancedConfig: '小区高级配置',
      timeSlotConfig: '时隙配置',
    },
  },
  page: {
    general: {
      title: '通用配置',
      titleList: ['全局参数配置', 'AMF配置', 'SNSSA配置'],
      btn: {
        refresh: '刷新',
        submit: '保存',
      },
      column: {
        cellNum: '小区数',
        plmnId: 'PlMN ID',
        amfIp: 'AMF IP',
        snssaNum: 'SNSSA可用数',
        sliceSd: 'SlICE SD',
        sliceSst: 'SlICE SST',
      },
    },
    basic: {
      title: ['小区基本信息', '链路自适应配置', '功控配置'],
      btn: {
        editText: '编辑',
        saveText: '保存',
        cancelText: '取消',
        cancelTip: '是否取消编辑?',
        saveTip: '正在保存...',
        saveSuccessTip: '数据已保存',
        saveFailedTip: '数据保存失败',
      },
      column: {
        cellIndex: '小区索引',
        cellStatus: '小区状态',
        cellId: '小区ID',
        hoppingId: '物理标识',
        ssb: 'SSB',
        pointA: 'PointA',
        maxUe: '小区支持最大用户数',
        rlcMode: 'RLC传输方式',
        dlLaEnabled: '下行LA开关',
        initDlMcs: '下行初始MCS',
        ulLaEnabled: '上行LA开关',
        initUlMcs: '上行初始MCS',
        p0NominalWithGrant: 'PUCCH期望接收功率RSRP',
        preambleReceivedTargetPower: 'PRACH期望接收功率RSRP',
        puschEnable: '开关',
        selectOption: {
          open: '开启',
          close: '关闭',
          available: '可用',
          notAvailable: '不可用',
        },
      },
    },
    advanced: {
      title: '物理资源配置',
      btn: {
        editText: '编辑',
        saveText: '保存',
        cancelText: '取消',
        cancelTip: '是否取消编辑?',
        saveTip: '正在保存...',
        saveSuccessTip: '数据已保存',
        saveFailedTip: '数据保存失败',
      },
      column: {
        cellIndex: '小区索引',
        numOfTxAntenna: '下行天线数',
        numOfRxAntenna: '上行天线数',
        dlMimo: '下行mimo',
        ulMimo: '上行mimo',
      },
    },
    timeSlot: {
      btn: {
        editText: '编辑',
        saveText: '保存',
        cancelText: '取消',
        cancelTip: '是否取消编辑?',
        saveTip: '正在保存...',
        saveSuccessTip: '数据已保存',
        saveFailedTip: '数据保存失败',
      },
      title: 'Pattern1',
      column: {
        cellIndex: '小区索引',
        tddUlDlPattern2Configured: '周期类型',
        dlUlTransmissionPeriodicity: '传输周期',
        numDlSlots: '下行时隙数',
        numDlSymbols: '特殊子帧下行符号数',
        numUlSlots: '上行时隙数',
        numUlSymbols: '特殊子帧上行符号数',
      },
    },
  },
};
