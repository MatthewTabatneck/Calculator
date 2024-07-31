import java.util.Scanner;

public class Calculator {
    static float addition(float firstNum, float secondNum) {
        return firstNum + secondNum;
    }
    static float subtraction(float firstNum, float secondNum) {
        return firstNum - secondNum;
    }
    static float multiplication(float firstNum, float secondNum) {
        return firstNum * secondNum;
    }
    static float division(float firstNum, float secondNum) {
        return firstNum / secondNum;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while(true){
            System.out.println("Enter the first number: ");
            float firstNum = scanner.nextFloat();
            System.out.println("Enter the second number: ");
            float secondNum = scanner.nextFloat();
            System.out.println("add(1), subtract(2), multiply(3), divide(4), or input 5 to end the program: ");
            int calcType = scanner.nextInt();
            
            if (calcType == 1)
            {
                System.out.println(firstNum + " + " + secondNum + " = " + addition(firstNum, secondNum));
            } else if (calcType == 2) {
                System.out.println(firstNum + " - " + secondNum + " = " + subtraction(firstNum, secondNum));
            } else if (calcType == 3) {
                System.out.println(firstNum + " * " + secondNum + " = " + multiplication(firstNum, secondNum));
            } else if (calcType == 4) {
                System.out.println(firstNum + " / " + secondNum + " = " + division(firstNum, secondNum));
            } else if (calcType == 5) {
                break;
            }
        }
        scanner.close();
    }
}