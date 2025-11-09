import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap

# Parameters for a tighter zoom directly on the seahorse tail region
xmin, xmax = -1, 1
ymin, ymax = -1, 1
width, height = 1200, 1200
max_iter = 1000

# Create grid of complex numbers
x = np.linspace(xmin, xmax, width)
y = np.linspace(ymin, ymax, height)
X, Y = np.meshgrid(x, y)
C = X + 1j*Y
Z = np.zeros_like(C)
M = np.full(C.shape, True, dtype=bool)
iterations = np.zeros(C.shape, dtype=int)

for i in range(max_iter):
    Z[M] = Z[M]**2 + C[M]
    diverged = np.abs(Z) > 2
    diverging_now = diverged & M
    iterations[diverging_now] = i
    M[diverging_now] = False

# Custom purple colormap (dark → light purple)
colors = [(0.05, 0.0, 0.1),  # dark purple
          (0.3, 0.0, 0.5),   # mid purple
          (0.6, 0.2, 0.8),   # bright purple
          (0.9, 0.7, 1.0)]   # pale lavender
cmap = LinearSegmentedColormap.from_list("custom_purple", colors, N=1024)

plt.figure(figsize=(8,8), facecolor=(0.05,0.02,0.1))
plt.imshow(iterations, extent=[xmin, xmax, ymin, ymax], cmap=cmap, origin="lower")
plt.axis("off")
plt.title("Mandelbrot Set – Seahorse Tail (Zoomed)", color="white")
plt.savefig("mandelbrot_seahorse_tail_zoom.png", facecolor=(0.05,0.02,0.1), dpi=300, bbox_inches="tight")
plt.show()