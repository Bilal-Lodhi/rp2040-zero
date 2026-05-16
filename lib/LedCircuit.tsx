export const LedCircuit = () => {
  return (
    <subcircuit>
      <chip
        name="LED"
        footprint="ws2812b"
        pinLabels={{
          VDD: "V3_3",
          DO: "NC",
          DI: "RGB_LED_DATA",
          GND: "GND",
        }}
      />
      <resistor
        name="LED_RESISTOR"
        resistance="330"
        footprint="0402"
      />
      <trace from=".LED > .GND" to="net.GND" />
      <trace from=".LED > .VDD" to="net.V3_3" />
      <trace from=".LED > .DI" to=".LED_RESISTOR > .left" />
      <trace from=".LED_RESISTOR > .right" to="net.GPIO16" />
    </subcircuit>
  )
}