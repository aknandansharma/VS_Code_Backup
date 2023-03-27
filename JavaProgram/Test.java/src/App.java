import java.util.Scanner;

public class App {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
         System.out.println("Enter the number:");
            int n = sc.nextInt();
            int i=1, c =0;
            while(i<=n){
                if(n%i==0){
                    c++;
                }
                i++;
            }
            if(c==2){
                System.out.println("Prime Number");
            }
            else if(c>2){
                System.out.println("Compiste Number");
            }
            else{
                System.out.println("Niether Prime nor Composite");
            }
    }
}
