#ifdef GL_ES
precision highp float;
#endif

varying vec3 vNormal;
varying vec2 vUv;

void main() {
    vec3 brown = vec3(.54, .27, .07);
    vec3 sunlightDirection = vec3(-1., -1., -1.);
    float lightness = -clamp(dot(normalize(vNormal), normalize(sunlightDirection)), -1., 0.);
    gl_FragColor = vec4(brown * lightness, 1.);
}