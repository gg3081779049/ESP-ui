import request from '@/utils/request'

export function getMenu() {
    return new Promise((res) => {
        res({
            data: [{
                path: 'home',
                icon: 'home',
                name: '首页',
            }, {
                path: 'dataVisual',
                icon: 'dataVisual',
                name: '数据可视化',
            }, {
                path: 'environmentalMonitoring',
                icon: 'environmentalMonitoring',
                name: '环境监测',
                children: [{
                    path: 'blueSkyGuard',
                    icon: 'blueSkyGuard',
                    name: '蓝天保卫',
                }, {
                    path: "clearWaterGuard",
                    icon: "clearWaterGuard",
                    name: '碧水保卫'
                }, {
                    path: "pureLandGuard",
                    icon: "pureLandGuard",
                    name: '净地保卫'
                }]
            }, {
                path: 'intelligentManagement',
                icon: 'intelligentManagement',
                name: '智能管理',
                children: [{
                    path: 'monitoringAnalysis',
                    icon: 'monitoringAnalysis',
                    name: '能耗监测与分析'
                }, {
                    path: 'intelligentControl',
                    icon: 'intelligentControl',
                    name: '智能控制系统'
                }, {
                    path: 'deviceMaintenanceOptimization',
                    icon: 'deviceMaintenanceOptimization',
                    name: '设备维护与优化'
                }, {
                    path: 'energyAuditsAssessments',
                    icon: 'energyAuditsAssessments',
                    name: '能源审计与评估'
                }, {
                    path: 'proportionalConversion',
                    icon: 'proportionalConversion',
                    name: '比例转换'
                }, {
                    path: 'energyConsumptionStatistics',
                    icon: 'energyConsumptionStatistics',
                    name: '能源损耗统计'
                }, {
                    path: 'monthlyEnergyOverview',
                    icon: 'monthlyEnergyOverview',
                    name: '月能耗总览'
                }, {
                    path: 'annualEnergyOverview',
                    icon: 'annualEnergyOverview',
                    name: '年能总耗览'
                }]
            }, {
                path: 'emissionsManagement',
                icon: 'emissionsManagement',
                name: '排放管理',
                children: [{
                    path: 'emissionDetectionAndAnalysis',
                    icon: 'emissionDetectionAndAnalysis',
                    name: '排放检测与分析',
                }, {
                    path: 'emissionAuditAndEvaluation',
                    icon: 'emissionAuditAndEvaluation',
                    name: '排放审计与评估'
                }, {
                    path: 'emissionMonthlyView',
                    icon: 'emissionMonthlyView',
                    name: '排放月览'
                }, {
                    path: 'emissionYearView',
                    icon: 'emissionYearView',
                    name: '排放年览'
                }, {
                    path: 'emissionSources',
                    icon: 'emissionSources',
                    name: '排放朔源'
                }]
            }]
        })
    })
}