import Vue, { Component } from 'vue';
import { SortableOptions } from 'sortablejs';

export interface Rule {
  identifier: string,
  value: any,
}

export interface RuleSet {
  operatorIdentifier: string,
  children: Array<RuleSet | Rule>,
}

export interface OperatorDefinition {
  identifier: string,
  name: string,
}

export interface RuleDefinition {
  identifier: string,
  name: string,
  component: Component | string,
  initialValue?: any,
}

export interface QueryBuilderConfig {
  operators: OperatorDefinition[],
  rules: RuleDefinition[],
  colors?: string[],
  dragging?: SortableOptions,
}

export interface GroupOperatorSlotProps {
  currentOperator: string,
  operators: OperatorDefinition[],
  updateCurrentOperator: (newOperator: string) => void,
}

export interface GroupCtrlSlotProps {
  rules: RuleDefinition[],
  addRule: (newRule: string) => void,
  newGroup: () => void,
}

export interface RuleSlotProps {
  ruleComponent: Component | string,
  ruleData: any,
  updateRuleData: (newData: any) => void,
}

export interface QueryBuilderGroup extends Vue {
  selectedOperator: string,
  depth: number,
  trap: ((position: number, newChild: RuleSet | Rule) => void) | null,
  children: Array<RuleSet | Rule>,
}

export interface ComponentRegistration {
  component: QueryBuilderGroup,
  ev: RuleSet,
  adding: boolean,
  affectedIdx: number,
}

export interface MergeTrap {
  registerSortUpdate(update: ComponentRegistration): void,
}
