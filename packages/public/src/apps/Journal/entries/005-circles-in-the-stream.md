# Journal Entry

## Circles in the stream

I wanted to find a formula to find the area of a regular polygon with N sides having only the side length `L`.

The following is the trigonometrical proof.

```math
l=L/2
```

```math
H=l\cdot\tan(\alpha)
```

```math
\beta = π/N
```

```math
\alpha = π/2 - \beta = π/2 - π/N
```

```math
\tan(\alpha)=\tan(π/2 - π/N)=\frac{\sin(π/2 - π/N)}{\cos(π/2 - π/N)}=\frac{\cancelto{1}{\sin(π/2)}\cdot\cos(π/N) - \cancel{\cos(π/2) \cdot \sin(π/N)}}{\cancel{\cos(π/2) \cdot \cos(π/N)} + \cancelto{1}{\sin(π/2)} \cdot \sin(π/N)}=\frac{\cos(π/N)}{\sin(π/N)}=\frac{1}{\tan(π/N)}
```

```math
A_l=l \cdot H/2
```

```math
A_L=2 \cdot A_l=l \cdot H = \frac{L \cdot H}{2}
```

```math
H = \frac{L}{2 \cdot tan(π/2)}
```

```math
A_N = N \cdot A_L= \frac{N \cdot L \cdot H}{2}=\frac{N \cdot L^2}{4 \cdot \tan(π/N)}
```

```math
A_4=\frac{\cancel{4}}{\cancel{4} \cdot \cancelto{1}{\tan(π/4)}} \cdot L^2 = L^2
```

```math
A_3=\frac{3}{4 \cdot \tan(π/3)} \cdot L^2 = \frac{1}{4} \cdot \cancelto{\sqrt{3}}{\frac{3}{\sqrt{3}}} \cdot L^2 = \frac{\sqrt{3}}{4} \cdot L^2 = 0,433 \cdot L^2
```

```math
A_6=\frac{6}{4 \cdot \tan(π/6)} \cdot L^2 = \frac{\cancelto{3}{6} \cdot \sqrt{3}}{\cancelto{2}{4}} \cdot L^2 = \frac{3 \cdot \sqrt{3}}{2} \cdot L^2 = 2,598 \cdot L^2
```

After that I was disappointed for the futility and uselessness of the formula,
and I asked myself what happened if I tried to compute the area of a regular
polygon having the length from the center to the vertices `R`.

```math
l=\cos(\alpha) \cdot R = \cos(π/2 - π/N) \cdot R = \cancel{\cos(π/2) \cdot \cos(π/N)} + \cancelto{1}{\sin(π/2)} \cdot \sin(π/N) \cdot R = \sin(π/N) \cdot R
```

```math
H=\sin(\alpha) \cdot R = \sin(π/2 - π/N) \cdot R = \cancelto{1}{\sin(π/2)}\cdot\cos(π/N) - \cancel{\cos(π/2) \cdot \sin(π/N)} \cdot R = \cos(π/N) \cdot R
```

```math
A_L=2 \cdot A_l=l \cdot H = \sin(π/N) \cdot R \cdot \cos(π/N) \cdot R = R^2 \cdot \sin(π/N) \cdot \cos(π/N)
```

```math
A_N = N \cdot A_L = N \cdot \sin(π/N) \cdot \cos(π/N) \cdot R^2
```

And this form

```math
t = π/N \implies N = π/t
```

```math
\lim_{N \rightarrow +\infin} N \cdot \sin(π/N) \cdot \cos(π/N) = \lim_{t \rightarrow 0} π/t \cdot \sin(t) \cdot \cos(t) = \lim_{t \rightarrow 0} π \cdot \cancelto{1}{\frac{\sin(t)}{t}} \cdot \cancelto{1}{\cos(t)} = π
```

So the area of a regular polygon an infinite number of sides and distance
from center and vertex R is actually the area of a circle of radius R.

```math
A_{+\infin} = π \cdot R^2
```
