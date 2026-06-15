export type RiskLevel = 'Low' | 'Medium' | 'High';

export type RiskSummary = {
  totalRecords: number;
  normalTraffic: number;
  anomalyTraffic: number;
  anomalyRatio: number;
  riskLevel: RiskLevel;
  recommendedAction: string;
};

export function classifyRisk(totalRecords: number, anomalyTraffic: number): RiskSummary {
  const anomalyRatio = totalRecords <= 0 ? 0 : (anomalyTraffic / totalRecords) * 100;
  const riskLevel: RiskLevel = anomalyRatio < 10 ? 'Low' : anomalyRatio < 30 ? 'Medium' : 'High';
  const recommendedAction =
    riskLevel === 'Low'
      ? 'Network condition is mostly normal. Continue monitoring.'
      : riskLevel === 'Medium'
        ? 'Inspect unusual traffic sources and review firewall/router logs.'
        : 'Prioritize incident investigation, isolate suspicious hosts, and verify critical services.';

  return {
    totalRecords,
    normalTraffic: Math.max(totalRecords - anomalyTraffic, 0),
    anomalyTraffic,
    anomalyRatio,
    riskLevel,
    recommendedAction,
  };
}
