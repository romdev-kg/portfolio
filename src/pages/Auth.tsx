
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Admin credentials that match those in AuthContext
const ADMIN_EMAIL = "admin@portfolio.com";

export default function Auth() {
  const { user, signIn, signUp, isLoading } = useAuth();
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [signupDisabled, setSignupDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  if (user) {
    return <Navigate to="/" />;
  }
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!email || !password) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    
    try {
      await signIn(email, password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!email || !password) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    
    if (password.length < 6) {
      toast.error("Пароль должен содержать не менее 6 символов");
      return;
    }
    
    try {
      const result = await signUp(email, password);
      if (!result.success) {
        setErrorMessage(result.message);
        if (result.message.includes("Регистрация закрыта")) {
          setSignupDisabled(true);
        }
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      setErrorMessage(error.message || "Ошибка при регистрации");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Портфолио Рамазана</CardTitle>
          <CardDescription>Войдите или зарегистрируйтесь, чтобы продолжить</CardDescription>
        </CardHeader>
        
        <Alert className="mx-6 mb-4">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Для входа в систему используйте:<br />
            Email: <strong>{ADMIN_EMAIL}</strong><br />
            Пароль: <strong>admin123456</strong> (при первом входе)
          </AlertDescription>
        </Alert>
        
        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register" disabled={signupDisabled}>Регистрация</TabsTrigger>
          </TabsList>
          
          <CardContent className="pt-6">
            {errorMessage && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
            
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    readOnly
                  />
                </div>
                <div>
                  <Input 
                    type="password" 
                    placeholder="Пароль" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Вход..." : "Войти"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              {signupDisabled ? (
                <Alert className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Регистрация закрыта. Портфолио уже имеет администратора.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      readOnly
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      type="password" 
                      placeholder="Пароль (минимум 6 символов)" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading || signupDisabled}>
                    {isLoading ? "Регистрация..." : "Зарегистрироваться"}
                  </Button>
                </form>
              )}
            </TabsContent>
          </CardContent>
          
          <CardFooter className="flex justify-center text-sm text-muted-foreground">
            {activeTab === "login" ? (
              <p>Нет аккаунта? <Button variant="link" className="p-0" onClick={() => setActiveTab("register")} disabled={signupDisabled}>Регистрация</Button></p>
            ) : (
              <p>Уже есть аккаунт? <Button variant="link" className="p-0" onClick={() => setActiveTab("login")}>Вход</Button></p>
            )}
          </CardFooter>
        </Tabs>
      </Card>
    </div>
  );
}
