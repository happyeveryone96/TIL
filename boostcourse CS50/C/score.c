#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <cs50.h>

int main(void){
    printf("학점 프로그램\n");
    printf("종료를 원하면 999를 입력\n");
    int score = get_int("성적을 입력하세요: ");
    if(95<=score && score<=100)
        printf("성적은 A+입니다\n");
    else if(90<=score && score<=94)
        printf("성적은 A입니다\n");
    else if(85<=score && score<=89)
        printf("성적은 B+입니다\n");
    else if(80<=score && score<=84)
        printf("성적은 B입니다\n");
    else if(75<=score && score<=79)
        printf("성적은 C+입니다\n");
    else if(70<=score && score<=74)
        printf("성적은 C입니다\n");
    else if(65<=score && score<=69)
        printf("성적은 D+입니다\n");
    else if(60<=score && score<=64)
        printf("성적은 D입니다\n");
    else if(0<=score && score<=59)
        printf("성적은 F입니다\n");
    else if(score==999)
        printf("프로그램을 종료합니다\n");
    else if(score<0 || score>100)
        printf("성적을 올바르게 입력하세요!(0~100)\n");
}
