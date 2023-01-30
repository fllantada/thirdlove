import React, { useReducer, useEffect } from "react";
import { ILineItem, DiscountProgressConfig } from "./types";

interface DiscountState {
  totalAmount: number; //$
  progress: Progress;
  actualAmountDiscount: number; //$
  nextAmountDiscount: number; //$
  nextStageUnblockAmount: number; //$
}

type Progress = [{ stage: number; percent: number }];

interface DiscountActions {
  type: "addProduct" | "removeProduct";
  payload: ILineItem;
}

export function useDiscount(
  config: DiscountProgressConfig
): [DiscountState, React.Dispatch<DiscountActions>] {
  //inicializar el config

  //{0 : 0, 135: 15, 150: 20, 200: 30, 300: 50}

  const discounts: number[] = Object.values(config);
  const stages: number[] = Object.keys(config).map((stage) => parseInt(stage));

  const discountReducer = (state: DiscountState, action: DiscountActions) => {
    switch (action.type) {
      case "addProduct":
        // 1. Calcular el nuevo totalAmount

        const newTotalAmount = state.totalAmount + action.payload.price;
        const newActualAmountDiscount = state.actualAmountDiscount;
        const newNextAmountDiscount = state.nextAmountDiscount;
        const newNextStageUnblockAmount = state.nextStageUnblockAmount;
        const newProgress = [...state.progress];

        const actualStage = newProgress[newProgress.length - 1].stage;
        const actualPercent = newProgress[newProgress.length - 1].percent;

        const newStage = [];
        const newPercent = 0;

        stages.forEach((stage, index) => {});

        // 3. Calcular el nuevo actualAmountDiscount

        // 4. Calcular el nuevo nextAmountDiscount

        // 5. Calcular el nuevo nextStageUnblockAmount

        // 6. Actualizar el estado

        stages.forEach((stage, index) => {
          if (newTotalAmount >= stage) {
            const nextAmounth = stages[index + 1]
              ? stages[index + 1] //
              : 0;
          }
        });

        return { ...state };
      case "removeProduct":
        return { ...state };
      default:
        return state;
    }
  };
  const initialState: DiscountState = {
    totalAmount: 0,
    progress: [
      {
        stage: 0,
        percent: 0,
      },
    ],
    actualAmountDiscount: 0,
    nextAmountDiscount: 0,
    nextStageUnblockAmount: 0,
  };

  const [discount, updateDiscount] = useReducer(discountReducer, initialState);

  return [discount, updateDiscount];
}
