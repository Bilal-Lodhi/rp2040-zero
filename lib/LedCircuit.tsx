import { WS2812B_2020 } from "../imports/WS2812B_2020"

export const LedCircuit = () => {
  return (
    <subcircuit>
      <WS2812B_2020
        name="LED"
        pinLabels={{
          pin1: "DO",
          pin2: "GND",
          pin3: "DI",
          pin4: "VDD"
        }}
      />
      <trace from=".LED > .VDD" to="net.V3_3" />
      <trace from=".LED > .GND" to="net.GND" />
      <trace from=".LED > .DI" to="net.GPIO16" />
    </subcircuit>
  )
}