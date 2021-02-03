#include <cs50.h>
#include <stdio.h>


int main(void)
{   
    int A = get_int("첫 번째 숫자를 입력하세요\n");
    int B = get_int("두 번째 숫자를 입력하세요\n");
    int C = get_int("세 번째 숫자를 입력하세요\n");
    int D = get_int("네 번째 숫자를 입력하세요\n");
    int E = get_int("다섯 번째 숫자를 입력하세요\n");
    int F = get_int("첫 번째 숫자를 입력하세요\n");
    int G = get_int("두 번째 숫자를 입력하세요\n");
    int H = get_int("세 번째 숫자를 입력하세요\n");
    int I = get_int("네 번째 숫자를 입력하세요\n");
    int J = get_int("다섯 번째 숫자를 입력하세요\n");
    int num1Arr[5]={A,B,C,D,E};
    int num2Arr[5]={F,G,H,I,J};
    printf("A: %i%i%i%i%i\n", num1Arr[0],num1Arr[1],num1Arr[2],num1Arr[3],num1Arr[4]);
    printf("B: %i%i%i%i%i\n", num2Arr[0],num2Arr[1],num2Arr[2],num2Arr[3],num2Arr[4]);

    int temp;
        for (int i=0; i < 5; i++)
        {
            for (int j=0; j < 5 - i - 1; j++ )
            {
            if (num1Arr[j] > num1Arr[j+1])
            {
                temp = num1Arr[j];
                num1Arr[j] = num1Arr[j+1];
                num1Arr[j+1] = temp;
            }
            }
        }
        printf("정렬된 A: ");
        for (int i=0; i < 5; i++)
        {
            
            printf("%d", num1Arr[i]);
            
        }
        printf("\n");
        // return 0;
        int temp2;
        for (int i=0; i < 5; i++)
        {
            for (int j=0; j < 5 - i - 1; j++ )
            {
            if (num2Arr[j] > num2Arr[j+1])
            {
                temp2 = num2Arr[j];
                num2Arr[j] = num2Arr[j+1];
                num2Arr[j+1] = temp2;
            }
            }
        }

        printf("정렬된 B: ");
        for (int i=0; i < 5; i++)
        {
            printf("%d", num2Arr[i]);
        }   
        printf("\n");
        if(num1Arr[0]==num2Arr[0] && num1Arr[1]==num2Arr[1] && num1Arr[2]==num2Arr[2] && num1Arr[3]==num2Arr[3] && num1Arr[4]==num2Arr[4]) 
        {
            printf("TRUE");
        }else{
            printf("FALSE");
        }

        return 0;
}

