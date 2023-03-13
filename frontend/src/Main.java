import java.util.*;
 class Node{
    int data;
    Node left;
    Node right;
    public Node(int Value){
        this.data=Value;
        this.left=null;
        this.right=null;
    }

 }
public class Main {
   
    public static void main(String[] args) {
      
      Node root=createTree();
      int height=findHeight(root);
      System.out.println(height);
    }
    
 static Node createTree(){

    Node root=null;
    System.out.println("enter the  value");
    Scanner sc=new Scanner(System.in);
    int val=sc.nextInt();
    if(val==-1)return null;
    root=new Node(val);
    System.out.println("enter the left child");
    root.left=createTree();
    System.out.println("enter the right child");
    root.right=createTree();
    return root;
}

static int findHeight(Node root){
  if(root.left==null || root.right==null){
    return 0;
  }
 
  int left=1+findHeight(root.left);
  int right=1+findHeight(root.right);
  if(left>right)return left;
  else return right;

}
}