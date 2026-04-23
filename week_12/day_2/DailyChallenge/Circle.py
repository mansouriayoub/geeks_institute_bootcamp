import math
import turtle


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is None and diameter is None:
            raise ValueError("Provide either radius or diameter")

        self.radius = radius if radius is not None else diameter / 2

    # ---- Properties ----
    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    # ---- Area ----
    def area(self):
        return math.pi * (self.radius ** 2)

    # ---- String representation ----
    def __str__(self):
        return f"Circle(radius={self.radius})"

    def __repr__(self):
        return f"Circle({self.radius})"

    # ---- Addition ----
    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    # ---- Comparisons ----
    def __gt__(self, other):
        return self.radius > other.radius

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius


# =========================
# CREATE CIRCLES
# =========================
circles = [
    Circle(radius=40),
    Circle(radius=20),
    Circle(radius=80),
    Circle(radius=60),
    Circle(radius=30)
]

# =========================
# SORT CIRCLES
# =========================
circles.sort()

# =========================
# TURTLE DRAWING (BONUS)
# =========================
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# starting position
t.penup()
t.goto(-250, 0)
t.pendown()

for c in circles:
    t.circle(c.radius)
    t.penup()
    t.forward(c.radius + 20)  # spacing
    t.pendown()

turtle.done()