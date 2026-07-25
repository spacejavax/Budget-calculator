import pygame 
import random
import asyncio

async def main():
    pygame.init()
    font = pygame.font.SysFont(None, 40)
    smallfont = pygame.font.SysFont(None, 28)
    radius = 10
    screen = pygame.display.set_mode((400, 400))
    replay = pygame.Rect(55, 260, 300, 50)

    size = 30

    snake = [pygame.Rect(10, 200, size, size)]


    darkpink = (197, 61, 105)
    white = (255, 255, 255)
    running = True
    over = False 
    clock = pygame.time.Clock()

    apple = pygame.Rect(random.randint(20, 380), random.randint(20, 380), 20, 20)

    vel = 6
    directionx = 1
    directiony = 0

    points = 0

    while running:
            
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        
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
        elif event.type == pygame.MOUSEBUTTONDOWN and replay:
            snake = [pygame.Rect(10, 200, size, size)]
            apple = pygame.Rect((random.randint(20, 380), random.randint(20, 380),20, 20))
            directionx = 1
            directiony = 0
            points = 0
            over = False
            
            
        oldposition = []
            
        for i in snake:
            oldposition.append(i.topleft)

        snake[0].x += directionx*vel
        snake[0].y += directiony*vel

        for i in range(1, len(snake)):
            snake[i].topleft = oldposition[i-1]
        #eats the dot and grows 
        if snake[0].colliderect(apple):
            points += 1
            apple = pygame.Rect(random.randint(20, 380), random.randint(20, 380), 20, 20)

            snake.append(pygame.Rect(oldposition[-1][0], oldposition[-1][1], size, size))
        if snake[0].left <= 0 or snake[0].right >= 400 or snake[0].top <= 0 or snake[0].bottom >= 400:
            over = True
            
        screen.fill((255, 197, 211))
        scoredisplay = smallfont.render(f"Score: {points}", True, darkpink)
        screen.blit(scoredisplay, (10, 10))

        if over == True:
            lost = font.render(f"YOU LOST!!", True, darkpink)
            replaytext = smallfont.render("TRY AGAIN PLEASE", True, darkpink)

            pygame.draw.rect(screen, white, replay, border_radius=10)

            screen.blit(lost, lost.get_rect(center=(200, 200)))
            screen.blit(replaytext, replaytext.get_rect(center=replay.center))

        else:
            pygame.draw.circle(screen, darkpink, apple.center, 10)

            for i in snake:
                pygame.draw.rect(screen, white, i)

        clock.tick(25)
        pygame.display.flip()
        await asyncio.sleep(0)
        
    pygame.quit()  
asyncio.run(main())