#include <stdio.h>
#define MAX_SIZE 100

int main()
{
    int i, k = 17, arr_length = 4, arr[4] = {10, 15, 3, 7};

    // printf("Enter value for K: ");
    // scanf("%d", &k);

    // if (k <= 0)
    // {
    //     printf("Value of K has to be greater than zero!");
    //     return 1;
    // }
    // else if (k > MAX_SIZE)
    // {
    //     printf("Value of K has to be lesser than or equal to 100!");
    //     return 1;
    // }

    // printf("Enter size of input array: ");
    // scanf("%d", &arr_length);

    // if (arr_length <= 0)
    // {
    //     printf("Length of array has to be a whole number!");
    //     return 1;
    // }
    // else
    // {
    //     int arr[k];
    //     for (i = 0; i < k; i++)
    //     {
    //         scanf("%d", &arr[i]);
    //     }
    // }
    findAddends(k, arr, arr_length);
    return 0;
}

void findAddends(int k, int arr[], int len)
{
    int i;
    for (i = 0; i < len; i++)
    {
        if (findElementInArray(arr, len, (k - arr[i])) > -1)
        {
            printf("The addends of %d are: %d and %d\n", k, arr[i], (k - arr[i]));
            return;
        }
    }
    printf("No addends are found in the given array!\n");
    return;
}

int findElementInArray(int arr[], int len, int el)
{
    int i, idx = -1;
    for (i = 0; i < len; i++)
    {
        if (arr[i] == el)
        {
            idx = i;
            break;
        }
    }
    return idx;
}