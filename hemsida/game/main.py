import pygame 
import random 

pygame.init()

radius = 10
screen = pygame.display.set_mode((400, 400))

square = pygame.Rect(10, 200, 25, 25)

darkpink = (197, 61, 105)
white = (255, 255, 255)
running = True

clock = pygame.time.Clock()
apple = pygame.Rect(random.randint(20, 380), random.randint(20, 380), 10, 10)

vel = 8
directionx = 1
directiony = 0

points = 0

while running:
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    #taken from techwithtim.net
    keys = pygame.key.get_pressed()

    if keys[pygame.K_LEFT]:
        directionx =  -1
        directiony = 0
    elif keys[pygame.K_RIGHT]:
        directionx = 1
        directiony = 0
    elif keys[pygame.K_UP]:
        directionx = 0
        directiony = -1
    elif keys[pygame.K_DOWN]:
        directionx = 0
        directiony = 1

    square.x += directionx*vel
    square.y += directiony*vel

    #eats the dot and grows 
    if square.collidepoint(apple.center):
        pygame.time.delay(10)
        points += 1
        apple = pygame.Rect(random.randint(20, 380), random.randint(20, 380), 10, 10)

    if square.left <= 0 or square.right >= 400 or square.top <= 0 or square.bottom >= 400:
        running = False
    
    screen.fill((255, 197, 211))

    pygame.draw.circle(screen, darkpink, apple.center, 10)
    pygame.draw.rect(screen, white, square)

    clock.tick(25)
    pygame.display.flip()


pygame.quit()