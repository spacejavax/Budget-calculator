import pygame 
import random 

pygame.init()

font = pygame.font.SysFont('cooperblack', 30)
radius = 10
screen = pygame.display.set_mode((400, 400))

size = 15

snake = [pygame.Rect(10, 200, size, size)]

darkpink = (197, 61, 105)
white = (255, 255, 255)
running = True

clock = pygame.time.Clock()
apple = pygame.Rect(random.randint(20, 380), random.randint(20, 380), 5, 5)

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

    
    oldposition = []
    
    for i in snake:
        oldposition.append(i.topleft)

    snake[0].x += directionx*vel
    snake[0].y += directiony*vel

    for i in range(1, len(snake)):
        snake[i].topleft = oldposition[i-1]
    #eats the dot and grows 
    if snake[0].collidepoint(apple.center):
        pygame.time.delay(10)
        points += 1
        apple = pygame.Rect(random.randint(20, 380), random.randint(20, 380), 10, 10)

        snake.append(pygame.Rect(oldposition[-1][0], oldposition[-1][1], size, size))


    if snake[0].left <= 0 or snake[0].right >= 400 or snake[0].top <= 0 or snake[0].bottom >= 400:
        running = False
    
    screen.fill((255, 197, 211))

    pygame.draw.circle(screen, darkpink, apple.center, 5)

    for i in snake:
        pygame.draw.rect(screen, white, i)

    clock.tick(25)
    pygame.display.flip()


pygame.quit()
