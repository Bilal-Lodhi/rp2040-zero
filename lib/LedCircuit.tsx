export const LedCircuit = () => {
  return (
    <subcircuit>
      <chip
        name="LED"
        footprint="ws2812b"
        pinLabels={{
          VDD: "V5_3",
          DO: "NC",
          DI: "RGB_LED_DATA",
          GND: "GND",
        }}
      />
      <resistor
        name="LED_RESISTOR"
        resistance="100"
        footprint="0402"
      />
      <trace from=".LED > .VDD" to=".LED_RESISTOR > .left" />
      <trace from=".LED_RESISTOR > .right" to="net.V5_3" />
    </subcircuit>
  )
}