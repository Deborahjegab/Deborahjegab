import java.util.Arrays;

public class Palindrome{

    static void palindrome(int num){
        int[] binary = new int[3];
        int[] revBin = new int[3];
        int i, n, id = 0, c = 0, h = 0;

        while (num > 0) {
            binary[id++] = num % 2;
            num = num / 2;
        }

        System.out.print("In binary, this number equals to ");
        for (i = id - 1; i >= 0; i--){
            System.out.print(binary[i]);
            revBin[h++] = binary[i];
        }

        System.out.println();
        System.out.println(Arrays.toString(revBin));

        n = binary.length;

        for(i=0;i<n/2;i++){
            if(binary[i]==binary[n-i-1]) c++;
        }

        if(c==i){
            System.out.println("It is palindrome");
        }else {
            System.out.println("It is not palindrome");
        }

    }

    public static void main(String[] args){
        System.out.println("Hello, world");
        palindrome(4);
    }

}