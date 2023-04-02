import java.util.Scanner;

public class App {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int x[] = new int[10];
      System.out.println("Enter 10 numbers: ");
      for (int i = 0; i < 10; i++) {
        x[i] = sc.nextInt();
      }

      int gr = x[0], sm = x[0];
      for (int i = 0; i < 10; i++) {
        if (x[i] > gr) {
          gr = x[i];
        }
        if (x[i] < sm) {
          sm = x[i];
        }
      }
      System.out.println(gr);
      System.out.println(sm);
            
    }
}

//  
